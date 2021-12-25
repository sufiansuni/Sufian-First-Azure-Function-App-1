# Sufian-First-Azure-Function-App

## Approach / Breakdown
Create 2 Endpoints
- First Endpoint: 
  - Request:
    - Method: Get
    - URL: static path to a file in a storage blob
    
  - Response:
    - JSON: comments.json

- Second Endpoint:
  - Request:
    - Method: Get
    - URL: path to a function app

  - Response: 
    - JSON: comments.json
    - Extra: function app will act as a middleware and retrieve it from the storage blob via API call



## Challenges / Learnings
- Setting up an Azure account

- Workspace Setup: 
  - Azure CLI
  - Azure Functions Core Tools
  - VS-Code extension: Azure Functions

- Using Python for Web
  - HTTP request and response

- Creating a function app
  - What is it?
  - How is it accessed/triggered?

- Creating a storage blob
  - What is it?
  - How to upload files to it?
  - How to manage access/authorization?

- Interactivity between function app and storage blob/other resources
  - How can the function app retrieve data from the storage blob?
  - What are bindings?



## References
Function App Quick-start (Python)  
https://docs.microsoft.com/en-us/azure/azure-functions/create-first-function-vs-code-python

Connect to Azure Functions to Azure Storage  
https://docs.microsoft.com/en-us/azure/azure-functions/functions-add-output-binding-storage-queue-vs-code?pivots=programming-language-python&tabs=in-process

Azure Blob storage input binding for Azure Functions  
https://docs.microsoft.com/en-us/azure/azure-functions/functions-bindings-storage-blob-input?tabs=python

Triggers and Bindings  
https://docs.microsoft.com/en-us/azure/azure-functions/functions-triggers-bindings?tabs=python
