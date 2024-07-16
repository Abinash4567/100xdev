#!/bin/bash

# URL of your API endpoint
API_URL="http://localhost:3000/api/120000"

# Number of concurrent requests
CONCURRENT_REQUESTS=5

# Total number of requests
TOTAL_REQUESTS=10000

# Function to send a single request
send_request() {
    response=$(curl -s -w "\nHTTP_STATUS:%{http_code}" "$API_URL")
    body=$(echo "$response" | sed -e '/^HTTP_STATUS:/d')
    status=$(echo "$response" | grep -oP 'HTTP_STATUS:\K\d+')
    echo "Response: $body"
    echo "Status: $status"
    echo "------------------------"
}

# Export the function so it can be used by xargs
export -f send_request

# Use seq to generate numbers and pipe them to xargs
# xargs will run the curl command in parallel
seq $TOTAL_REQUESTS | xargs -P$CONCURRENT_REQUESTS -I {} bash -c 'send_request'

echo "Test completed."
