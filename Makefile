PROD_USER := acm
PROD_DB := acm

PORT ?= 8000 # dev port

# SUPERVISORCTL := supervisorctl


## Deploy ##

.PHONY: deploy
deploy: deploy-nginx deploy-public

.PHONY: deploy-hard
deploy-hard: deploy-nginx npm-install deploy-public

.PHONY: deploy-nginx
deploy-nginx: /etc/nginx/conf.d/byu-acm.conf
	nginx -s reload

/etc/nginx/conf.d/byu-acm.conf: deploy/nginx/byu-acm.conf
	cp $< $@

.PHONY: npm-install
npm-install:
	rm -rf node_modules && npm i

.PHONY: deploy-public
deploy-public:
	npm run build && rsync -r --update --delete public/ /var/www/acm-public/

