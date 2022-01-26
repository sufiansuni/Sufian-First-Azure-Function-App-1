import azure.functions as func

def main(req: func.HttpRequest, commentsFile: str) -> str:
    return func.HttpResponse(
        body = commentsFile, 
        headers = {
            "Content-Type" : "application/json"
        }
    )
