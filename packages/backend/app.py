# type: ignore
from fastapi import FastAPI

app = FastAPI()


@app.get("/")
async def root():
    print("Hello World")
    return {"message": "Hello World"}


@app.get("/upload")
# get image from frontend from this endpoint
async def upload_image(imageUrl: str):
    print(imageUrl)
    return {"message": "Upload Image"}
