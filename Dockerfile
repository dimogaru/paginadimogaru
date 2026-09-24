FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY index.html styles.css script.js site-config.js favicon.svg robots.txt sitemap.xml \
     offbunker_1.png offbunker_2.png offbunker_3.jpeg offbunker_4.jpeg offbunker_5.jpeg \
     dodge_1.jpeg dodge_2.jpeg dodge_3.jpeg dodge_4.jpeg \
     pixel_1.jpeg pixel_2.jpeg pixel_3.jpeg /usr/share/nginx/html/

RUN chmod -R a+rX /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q --spider http://127.0.0.1/ || exit 1