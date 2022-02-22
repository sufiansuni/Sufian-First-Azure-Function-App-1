import azure.functions as func
import os
from azure.identity import DefaultAzureCredential
from azure.keyvault.secrets import SecretClient

def main(req: func.HttpRequest, commentsFile: str) -> str:
    keyvault_name = os.environ["AZURE_KEYVAULT"]
    keyvault_uri = f"https://{keyvault_name}.vault.azure.net/"

    '''
    Notes: 
    - Set up of a Service Principal is required.
    - Credentials need to be in invironment variables.

    https://docs.microsoft.com/en-us/cli/azure/create-an-azure-service-principal-azure-cli
    
    '''
    keyvault_credential = DefaultAzureCredential()

    keyvault_secret_client = SecretClient(vault_url=keyvault_uri, credential=keyvault_credential)
    sample_secret = keyvault_secret_client.get_secret("SampleKey").value

    # print(sample_secret)
    test_secret = os.getenv("SampleKey")
    
    return func.HttpResponse(
        body = test_secret, 
        headers = {
            "Content-Type" : "text/html"
        }
    )
