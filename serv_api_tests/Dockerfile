FROM postman/newman:alpine

# Set the working directory to /app
WORKDIR /app

# Install the necessary reporters
RUN npm install -g newman-reporter-html newman-reporter-htmlextra

# Copy the collection and data files into the container at /app
COPY apicollections.json /app/
COPY env.json /app/
COPY TestData.csv /app/

# Entry point command to run Newman with dynamic environment variable

ENTRYPOINT ["sh", "-c", "newman run /app/apicollections.json -d /app/TestData.csv -n 2 --delay-request 500 -r htmlextra --reporter-htmlextra-noSyntaxHighlighting --reporter-htmlextra-title 'API Suite Report' --reporter-htmlextra-export /app/apisuitereport.html --environment /app/env.json --env-var serviceEndPoint=$SERVICE_ENDPOINT"]


