# status

1) created api for login and signup
2) created api to take order ( user with token can only take order)


# Running project

step-1: npm install
step-2: create a .env file provide port,db link, and jwt secret

eg:
PORT=4000
DB_CONNECT=mongourl/test
JWT=KJDBFSJDF

# ENDPOINTS

# register
curl --location --request POST 'localhost:4000/auth/register/' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name":"te",
    "email":"test@gmail.com",
    "password":"11111"
}'

# login

curl --location --request POST 'localhost:4000/auth/login/' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email":"test@gmail.com",
    "password":"11111"
}'

# order

curl --location --request POST 'localhost:4000/order/place-order' \
--header 'auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjZkNjVlY2ZlYWVhMzU4MTJjZGRmNDMiLCJpYXQiOjE2NTEzNDAxMDd9.tCf99OS0LVBZpamAQ--hEx8DNQSz67jPCSbqIepuu7w' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjZkNjVlY2ZlYWVhMzU4MTJjZGRmNDMiLCJpYXQiOjE2NTEzNDAxMDd9.tCf99OS0LVBZpamAQ--hEx8DNQSz67jPCSbqIepuu7w' \
--header 'Content-Type: application/json' \
--data-raw '{
    "clientid": "13b37bb1ed6d3403e158abe719b4f6d0",
    "order_ref_no": "XYZ-3434-2391",
    "date": "2016-07-14 08:25:08",
    "priority": "2",
    "addresses": [
        {
            "type": "delivery",
            "company": "Example company",
            "name": "Example name",
            "street1": "Example street 1234",
            "street2": "Building 5",
            "zip": "99999",
            "city": "Example city",
            "country": "US",
            "state": "NY",
            "email": "email@example.com",
            "phone": "12345678"
        }
    ],
    "shipping": {
            "method": "fedex_national_2_day",
            "consignor": "The Book Company",
            "invoice": {
                "shipments": 1,
                "currency": "EUR",
                "total": "4.2000"
            }
        },
        "items": [
            {
                "id": "123456780001",
                "count": "1",
                "title": "Wedding Album",
                "product": "12x12 Imagewrap book",
                "desc": "Textbook Casewrap (PUR, 3 mm board) A3 Portrait DIG FC 80OFF",
                "pages": "44",
                "files": [
                    {
                        "type": "cover",
                        "format": "pdf",
                        "url": "https://s3-eu-west-1.amazonaws.com/test/29c1d90b21bd7c8d28ba1fd1ae7646eb_cover.pdf",
                        "md5sum": "4578c3ecf64e47581b175d542f8b0160",
                        "size": "20785"
                    },
                    {
                        "type": "book",
                        "format": "pdf",
                        "url": "https://s3-eu-west-1.amazonaws.com/test/29c1d90b21bd7c8d28ba1fd1ae7646eb_book.pdf",
                        "md5sum": "1ef89e74e628e223ae94aa4586330833",
                        "size": "77459"
                    }
                ],
                "options": [
                    {
                        "option": "substrate",
                        "desc": "Metallic Paper",
                        "count": "44",
                        "type": "Inner Pages"
                    },
                    {
                        "option": "Lamination",
                        "desc": "Gloss Lamination",
                        "count": "1",
                        "type": "Cover Page"
                    }
                ]
            }
        ]
}
'


# suggestion and findings

1) it's good that we can save those details in one table other than 3 tables because we need to write aggregate query to retrive it so. So i create a extra field that is product id which is the saved mongo id of product so that we can retrive it using that id

2) Or else we can create 3 api and call that 2 api inside one api using axios 




# THANK YOU!!!!
