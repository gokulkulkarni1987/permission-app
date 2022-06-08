'use strict';

module.exports.permTable = {
    "description" : "PermniasionsTable",
    "permissionsList" : [
        {
            "uaerid" : "Gokul",
            "resource" : {
                "ngo" : ["*", "5", "6"],
                "chapter": ["*", "15", "16"],
                "event" : ["*", "222", "555", "777", "999"]
            },
            "res_action" : [ "*", "Create", "Update", "Delete", "Approve"],
        },
        {
            "uaerid" : "Gokul",
            "resource" : {
                "ngo" : ["*", "5", "6"],
                "chapter": ["*", "15", "16"],
                "event" : ["*", "222", "555", "777", "999"]
            },
            "res_action" : [ "*", "Create", "Update", "Delete", "Approve"],
        },
        {
            "uaerid" : "Vinaya",
            "resource" : {
                "ngo" : ["*", "5", "6"],
                "chapter": ["*", "15", "16"],
                "event" : ["*", "222", "555", "777", "999"]
            },
            "res_action" : [ "*", "Create", "Update", "Delete", "Approve"],
        }
    ]
}