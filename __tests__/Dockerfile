# This is for CI in GitHub Actions
ARG image_tag
FROM magikcraft/magikcraft:${image_tag}-latest

# Setup the working directory
RUN mkdir /srv/github-actions-app
WORKDIR /_server_

RUN mkdir -p scriptcraft-plugins/@magikcraft/jx
COPY dist/ ./scriptcraft-plugins/@magikcraft/jx/

# Accept Minecraft EULA
RUN echo "eula=true" >> eula.txt

# From here: https://vsupalov.com/docker-build-time-env-values/
ARG TEST_MODE_SETTING=true
ENV TEST_MODE=$TEST_MODE_SETTING

# Run the tests
RUN /_server_/start.sh
