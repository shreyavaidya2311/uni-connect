import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

import routes.paths as paths

# init APP
app = FastAPI()


app.include_router(paths.router)

# Setting up CORS middleware
origins = [
    "http://localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


if __name__ == '__main__':
    uvicorn.run("app:app",  host="localhost",
                port=8000, reload=True,  debug=True)
