#! /bin/bash
cd mkalex-admin
npm run build
cd ../mkalex-site
npm run build
cd ../
rsync -azv --exclude-from=./exclude.list  --delete ./mkalex-admin/dist/* root@mkalex.com:/mkalex/mkalex-admin
rsync -azv --exclude-from=./exclude.list  --delete ./mkalex-site/dist/* root@mkalex.com:/mkalex/mkalex-site

