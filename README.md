# holy-verses-express-api
https://holy-verses-api.onrender.com/

## endpoints
Using a tool like Postman, until I make a decent UI:
1. https://holy-verses-api.onrender.com/signin
{
  "username": "stanimal",
  "password": "admin"
}
2. https://holy-verses-api.onrender.com/user
{
  "username": CREATE_A_USERNAME,
  "password": CREATE_A_PASSWORD
}
3. https://holy-verses-api.onrender.com/api/verse 
Make a GET request here to get all the verses using the token you get back after making a request to either of above endpoints.
4. https://holy-verses-api.onrender.com/api/verse
Make a POST request here using token with a req body similar to below:
{
  "content": "Be not rash with your mouth, nor let your heart be hasty to utter a word before God, for God is in heaven and you are on earth. Therefore let your words be few.",
  "book": "Ecclesiastes",
  "chapter": 5,
  "translation": "ESV",
  "verses": [2]
}
