export const openapispec = {
    "openapi": "3.0.0",
        "info": {
        "title": "Users API",
            "version": "1.0.0"
    },
    "paths": {
        "/api/users": {
            "get": {
                "summary": "Returns the list of all users",
                    "tags": [
                        "Users"
                    ],
                        "responses": {
                    "200": {
                        "description": "The list of users",
                            "content": {
                            "application/json": {
                                "schema": {
                                    "type": "array",
                                        "items": {
                                        "type": "object",
                                            "required": [
                                                "id",
                                                "name",
                                                "address",
                                                "phone"
                                            ],
                                                "properties": {
                                            "id": {
                                                "type": "integer",
                                                    "description": "The auto-generated id of the user"
                                            },
                                            "name": {
                                                "type": "string",
                                                    "description": "The name of the user"
                                            },
                                            "address": {
                                                "type": "string",
                                                    "description": "The address of the user"
                                            },
                                            "phone": {
                                                "type": "string",
                                                    "description": "The phone number of the user"
                                            }
                                        },
                                        "example": [
                                            {
                                                "id": 1,
                                                "name": "John Doe",
                                                "address": "123 Main St, Anytown, USA",
                                                "phone": "555-1234"
                                            },
                                            {
                                                "id": 2,
                                                "name": "Jane Smith",
                                                "address": "456 Maple Ave, Othertown, USA",
                                                "phone": "555-5678"
                                            },
                                            {
                                                "id": 3,
                                                "name": "Jim Brown",
                                                "address": "789 Elm St, Anycity, USA",
                                                "phone": "555-9101"
                                            }
                                        ]
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}