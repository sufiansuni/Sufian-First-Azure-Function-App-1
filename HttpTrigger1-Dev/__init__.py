import azure.functions as func

from ..HttpTrigger1 import main as HttpTrigger1

def main(req: func.HttpRequest, commentsFile: str) -> str:
    return HttpTrigger1(req=req, commentsFile=commentsFile)
 