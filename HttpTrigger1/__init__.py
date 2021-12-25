import azure.functions as func

def main(req: func.HttpRequest, commentsFile: str) -> str:
    print(req)
    return func.HttpResponse(body=commentsFile, headers={"Content-Type" : "application/json"})
 