import uvicorn
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
import routes.paths as paths

# init APP
app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name = "static")
templates = Jinja2Templates(directory="templates")
@app.get("/{full_path:path}")
async def serve_spa(request:Request,full_path:str) :
    return templates.TemplateResponse("index.html",{"request":request})

app.include_router(paths.router)

# Setting up CORS middleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


if __name__ == '__main__':
    uvicorn.run("app:app",  host="localhost",
                port=8000, reload=True,  debug=True)
