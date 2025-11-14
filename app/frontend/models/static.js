const api = {
  "openapi": "3.0.3",
  "components": {
    "schemas": {
      "active_storage_attachment": {
        "x-rhino-model": {
          "model": "active_storage_attachment",
          "modelPlural": "active_storage/attachments",
          "name": "activeStorage::Attachment",
          "pluralName": "activeStorage::Attachments",
          "readableName": "Attachment",
          "pluralReadableName": "Attachments",
          "ownedBy": null,
          "singular": false,
          "path": "/api/attachments",
          "searchable": false
        },
        "type": "object",
        "properties": {
          "id": {
            "x-rhino-attribute": {
              "name": "id",
              "readableName": "Id",
              "readable": true,
              "creatable": false,
              "updatable": false
            },
            "readOnly": true,
            "nullable": false,
            "type": "identifier"
          },
          "name": {
            "x-rhino-attribute": {
              "name": "name",
              "readableName": "Name",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": false,
            "type": "string"
          },
          "record_type": {
            "x-rhino-attribute": {
              "name": "record_type",
              "readableName": "Record Type",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": false,
            "type": "string"
          },
          "created_at": {
            "x-rhino-attribute": {
              "name": "created_at",
              "readableName": "Created At",
              "readable": true,
              "creatable": false,
              "updatable": false
            },
            "readOnly": true,
            "nullable": false,
            "type": "string",
            "format": "datetime"
          },
          "url": {
            "x-rhino-attribute": {
              "name": "url",
              "readableName": "Url",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": true
          },
          "url_attachment": {
            "x-rhino-attribute": {
              "name": "url_attachment",
              "readableName": "Url Attachment",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": true
          },
          "previews": {
            "x-rhino-attribute": {
              "name": "previews",
              "readableName": "Previews",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": true,
            "default": {
            },
            "type": "json"
          },
          "representations": {
            "x-rhino-attribute": {
              "name": "representations",
              "readableName": "Representations",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": true,
            "default": {
            },
            "type": "json"
          },
          "variants": {
            "x-rhino-attribute": {
              "name": "variants",
              "readableName": "Variants",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": true,
            "default": {
            },
            "type": "json"
          },
          "signed_id": {
            "x-rhino-attribute": {
              "name": "signed_id",
              "readableName": "Signed",
              "readable": true,
              "creatable": false,
              "updatable": false
            },
            "readOnly": true,
            "nullable": true,
            "type": "unknown"
          }
        },
        "required": [
          "name",
          "record_type"
        ]
      },
      "user": {
        "x-rhino-model": {
          "model": "user",
          "modelPlural": "users",
          "name": "user",
          "pluralName": "users",
          "readableName": "User",
          "pluralReadableName": "Users",
          "ownedBy": null,
          "singular": false,
          "path": "/api/users",
          "searchable": false
        },
        "type": "object",
        "properties": {
          "id": {
            "x-rhino-attribute": {
              "name": "id",
              "readableName": "Id",
              "readable": true,
              "creatable": false,
              "updatable": false
            },
            "readOnly": true,
            "nullable": false,
            "type": "identifier"
          },
          "name": {
            "x-rhino-attribute": {
              "name": "name",
              "readableName": "Name",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": true,
            "type": "string"
          },
          "nickname": {
            "x-rhino-attribute": {
              "name": "nickname",
              "readableName": "Nickname",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": true,
            "type": "string"
          },
          "email": {
            "x-rhino-attribute": {
              "name": "email",
              "readableName": "Email",
              "readable": true,
              "creatable": true,
              "updatable": false
            },
            "nullable": false,
            "type": "string",
            "pattern": "^[^@\\s]+@[^@\\s]+$"
          },
          "image": {
            "x-rhino-attribute": {
              "name": "image",
              "readableName": "Image",
              "readable": true,
              "creatable": false,
              "updatable": false
            },
            "readOnly": true,
            "nullable": true,
            "type": "string"
          }
        },
        "required": [
          "email"
        ]
      },
      "account": {
        "x-rhino-model": {
          "model": "account",
          "modelPlural": "accounts",
          "name": "account",
          "pluralName": "accounts",
          "readableName": "Account",
          "pluralReadableName": "Accounts",
          "ownedBy": "global",
          "singular": true,
          "path": "/api/account",
          "searchable": false
        },
        "type": "object",
        "properties": {
          "id": {
            "x-rhino-attribute": {
              "name": "id",
              "readableName": "Id",
              "readable": true,
              "creatable": false,
              "updatable": false
            },
            "readOnly": true,
            "nullable": false,
            "type": "identifier"
          },
          "name": {
            "x-rhino-attribute": {
              "name": "name",
              "readableName": "Name",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": true,
            "type": "string"
          },
          "nickname": {
            "x-rhino-attribute": {
              "name": "nickname",
              "readableName": "Nickname",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": true,
            "type": "string"
          },
          "email": {
            "x-rhino-attribute": {
              "name": "email",
              "readableName": "Email",
              "readable": true,
              "creatable": true,
              "updatable": false
            },
            "nullable": false,
            "type": "string",
            "pattern": "^[^@\\s]+@[^@\\s]+$"
          },
          "image": {
            "x-rhino-attribute": {
              "name": "image",
              "readableName": "Image",
              "readable": true,
              "creatable": false,
              "updatable": false
            },
            "readOnly": true,
            "nullable": true,
            "type": "string"
          },
          "users_roles": {
            "x-rhino-attribute": {
              "name": "users_roles",
              "readableName": "Users Roles",
              "readable": true,
              "creatable": false,
              "updatable": false
            },
            "readOnly": true,
            "nullable": true,
            "type": "array",
            "items": {
              "type": "reference",
              "anyOf": [
                {
                  "$ref": "#/components/schemas/users_role"
                }
              ],
              "x-rhino-attribute-array": {
              }
            }
          }
        },
        "required": [
          "email"
        ]
      },
      "organization": {
        "x-rhino-model": {
          "model": "organization",
          "modelPlural": "organizations",
          "name": "organization",
          "pluralName": "organizations",
          "readableName": "Organization",
          "pluralReadableName": "Organizations",
          "ownedBy": null,
          "singular": false,
          "path": "/api/organizations",
          "searchable": false
        },
        "type": "object",
        "properties": {
          "id": {
            "x-rhino-attribute": {
              "name": "id",
              "readableName": "Id",
              "readable": true,
              "creatable": false,
              "updatable": false
            },
            "readOnly": true,
            "nullable": false,
            "type": "identifier"
          },
          "name": {
            "x-rhino-attribute": {
              "name": "name",
              "readableName": "Name",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": true,
            "type": "string"
          },
          "created_at": {
            "x-rhino-attribute": {
              "name": "created_at",
              "readableName": "Created At",
              "readable": true,
              "creatable": false,
              "updatable": false
            },
            "readOnly": true,
            "nullable": false,
            "type": "string",
            "format": "datetime"
          },
          "updated_at": {
            "x-rhino-attribute": {
              "name": "updated_at",
              "readableName": "Updated At",
              "readable": true,
              "creatable": false,
              "updatable": false
            },
            "readOnly": true,
            "nullable": false,
            "type": "string",
            "format": "datetime"
          },
          "users_roles": {
            "x-rhino-attribute": {
              "name": "users_roles",
              "readableName": "Users Roles",
              "readable": true,
              "creatable": false,
              "updatable": false
            },
            "readOnly": true,
            "nullable": true,
            "type": "array",
            "items": {
              "type": "reference",
              "anyOf": [
                {
                  "$ref": "#/components/schemas/users_role"
                }
              ],
              "x-rhino-attribute-array": {
              }
            }
          }
        }
      },
      "users_role": {
        "x-rhino-model": {
          "model": "users_role",
          "modelPlural": "users_roles",
          "name": "usersRole",
          "pluralName": "usersRoles",
          "readableName": "Users role",
          "pluralReadableName": "Users roles",
          "ownedBy": "organization",
          "singular": false,
          "path": "/api/users_roles",
          "searchable": false
        },
        "type": "object",
        "properties": {
          "id": {
            "x-rhino-attribute": {
              "name": "id",
              "readableName": "Id",
              "readable": true,
              "creatable": false,
              "updatable": false
            },
            "readOnly": true,
            "nullable": false,
            "type": "identifier"
          },
          "created_at": {
            "x-rhino-attribute": {
              "name": "created_at",
              "readableName": "Created At",
              "readable": true,
              "creatable": false,
              "updatable": false
            },
            "readOnly": true,
            "nullable": false,
            "type": "string",
            "format": "datetime"
          },
          "updated_at": {
            "x-rhino-attribute": {
              "name": "updated_at",
              "readableName": "Updated At",
              "readable": true,
              "creatable": false,
              "updatable": false
            },
            "readOnly": true,
            "nullable": false,
            "type": "string",
            "format": "datetime"
          },
          "user": {
            "x-rhino-attribute": {
              "name": "user",
              "readableName": "User",
              "readable": true,
              "creatable": true,
              "updatable": false
            },
            "nullable": false,
            "type": "reference",
            "anyOf": [
              {
                "$ref": "#/components/schemas/user"
              }
            ]
          },
          "role": {
            "x-rhino-attribute": {
              "name": "role",
              "readableName": "Role",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": false,
            "type": "reference",
            "anyOf": [
              {
                "$ref": "#/components/schemas/role"
              }
            ]
          },
          "organization": {
            "x-rhino-attribute": {
              "name": "organization",
              "readableName": "Organization",
              "readable": true,
              "creatable": true,
              "updatable": false
            },
            "nullable": false,
            "type": "reference",
            "anyOf": [
              {
                "$ref": "#/components/schemas/organization"
              }
            ]
          }
        },
        "required": [
          "user",
          "role",
          "organization"
        ]
      },
      "role": {
        "x-rhino-model": {
          "model": "role",
          "modelPlural": "roles",
          "name": "role",
          "pluralName": "roles",
          "readableName": "Role",
          "pluralReadableName": "Roles",
          "ownedBy": "global",
          "singular": false,
          "path": "/api/roles",
          "searchable": false
        },
        "type": "object",
        "properties": {
          "id": {
            "x-rhino-attribute": {
              "name": "id",
              "readableName": "Id",
              "readable": true,
              "creatable": false,
              "updatable": false
            },
            "readOnly": true,
            "nullable": false,
            "type": "identifier"
          },
          "name": {
            "x-rhino-attribute": {
              "name": "name",
              "readableName": "Name",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": false,
            "type": "string",
            "pattern": "^[a-zA-Z_]+$"
          },
          "created_at": {
            "x-rhino-attribute": {
              "name": "created_at",
              "readableName": "Created At",
              "readable": true,
              "creatable": false,
              "updatable": false
            },
            "readOnly": true,
            "nullable": false,
            "type": "string",
            "format": "datetime"
          },
          "updated_at": {
            "x-rhino-attribute": {
              "name": "updated_at",
              "readableName": "Updated At",
              "readable": true,
              "creatable": false,
              "updatable": false
            },
            "readOnly": true,
            "nullable": false,
            "type": "string",
            "format": "datetime"
          }
        },
        "required": [
          "name"
        ]
      },
      "users_role_invite": {
        "x-rhino-model": {
          "model": "users_role_invite",
          "modelPlural": "users_role_invites",
          "name": "usersRoleInvite",
          "pluralName": "usersRoleInvites",
          "readableName": "Users role invite",
          "pluralReadableName": "Users role invites",
          "ownedBy": "organization",
          "singular": false,
          "path": "/api/users_role_invites",
          "searchable": false
        },
        "type": "object",
        "properties": {
          "id": {
            "x-rhino-attribute": {
              "name": "id",
              "readableName": "Id",
              "readable": true,
              "creatable": false,
              "updatable": false
            },
            "readOnly": true,
            "nullable": false,
            "type": "identifier"
          },
          "email": {
            "x-rhino-attribute": {
              "name": "email",
              "readableName": "Email",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": false,
            "type": "string"
          },
          "created_at": {
            "x-rhino-attribute": {
              "name": "created_at",
              "readableName": "Created At",
              "readable": true,
              "creatable": false,
              "updatable": false
            },
            "readOnly": true,
            "nullable": false,
            "type": "string",
            "format": "datetime"
          },
          "updated_at": {
            "x-rhino-attribute": {
              "name": "updated_at",
              "readableName": "Updated At",
              "readable": true,
              "creatable": false,
              "updatable": false
            },
            "readOnly": true,
            "nullable": false,
            "type": "string",
            "format": "datetime"
          },
          "role": {
            "x-rhino-attribute": {
              "name": "role",
              "readableName": "Role",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": false,
            "type": "reference",
            "anyOf": [
              {
                "$ref": "#/components/schemas/role"
              }
            ]
          },
          "organization": {
            "x-rhino-attribute": {
              "name": "organization",
              "readableName": "Organization",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": false,
            "type": "reference",
            "anyOf": [
              {
                "$ref": "#/components/schemas/organization"
              }
            ]
          }
        },
        "required": [
          "email",
          "role",
          "organization"
        ]
      },
      "project": {
        "x-rhino-model": {
          "model": "project",
          "modelPlural": "projects",
          "name": "project",
          "pluralName": "projects",
          "readableName": "Project",
          "pluralReadableName": "Projects",
          "ownedBy": "organization",
          "singular": false,
          "path": "/api/projects",
          "searchable": false
        },
        "type": "object",
        "properties": {
          "id": {
            "x-rhino-attribute": {
              "name": "id",
              "readableName": "Id",
              "readable": true,
              "creatable": false,
              "updatable": false
            },
            "readOnly": true,
            "nullable": false,
            "type": "identifier"
          },
          "name": {
            "x-rhino-attribute": {
              "name": "name",
              "readableName": "Name",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": false,
            "type": "string",
            "maxLength": 255
          },
          "description": {
            "x-rhino-attribute": {
              "name": "description",
              "readableName": "Description",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": false,
            "type": "text"
          },
          "start_date": {
            "x-rhino-attribute": {
              "name": "start_date",
              "readableName": "Start Date",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": false,
            "type": "string",
            "format": "datetime"
          },
          "end_date": {
            "x-rhino-attribute": {
              "name": "end_date",
              "readableName": "End Date",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": false,
            "type": "string",
            "format": "datetime"
          },
          "created_at": {
            "x-rhino-attribute": {
              "name": "created_at",
              "readableName": "Created At",
              "readable": true,
              "creatable": false,
              "updatable": false
            },
            "readOnly": true,
            "nullable": false,
            "type": "string",
            "format": "datetime"
          },
          "updated_at": {
            "x-rhino-attribute": {
              "name": "updated_at",
              "readableName": "Updated At",
              "readable": true,
              "creatable": false,
              "updatable": false
            },
            "readOnly": true,
            "nullable": false,
            "type": "string",
            "format": "datetime"
          },
          "organization": {
            "x-rhino-attribute": {
              "name": "organization",
              "readableName": "Organization",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": false,
            "type": "reference",
            "anyOf": [
              {
                "$ref": "#/components/schemas/organization"
              }
            ]
          },
          "manager": {
            "x-rhino-attribute": {
              "name": "manager",
              "readableName": "Manager",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": true,
            "type": "reference",
            "anyOf": [
              {
                "$ref": "#/components/schemas/user"
              }
            ]
          }
        },
        "required": [
          "name",
          "description",
          "start_date",
          "end_date",
          "organization"
        ]
      },
      "ticket": {
        "x-rhino-model": {
          "model": "ticket",
          "modelPlural": "tickets",
          "name": "ticket",
          "pluralName": "tickets",
          "readableName": "Ticket",
          "pluralReadableName": "Tickets",
          "ownedBy": "project",
          "singular": false,
          "path": "/api/tickets",
          "searchable": false
        },
        "type": "object",
        "properties": {
          "id": {
            "x-rhino-attribute": {
              "name": "id",
              "readableName": "Id",
              "readable": true,
              "creatable": false,
              "updatable": false
            },
            "readOnly": true,
            "nullable": false,
            "type": "identifier"
          },
          "title": {
            "x-rhino-attribute": {
              "name": "title",
              "readableName": "Title",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": false,
            "type": "string",
            "maxLength": 255
          },
          "description": {
            "x-rhino-attribute": {
              "name": "description",
              "readableName": "Description",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": false,
            "type": "text"
          },
          "category": {
            "x-rhino-attribute": {
              "name": "category",
              "readableName": "Category",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": false,
            "type": "string",
            "enum": [
              "bug",
              "feature",
              "task"
            ]
          },
          "status": {
            "x-rhino-attribute": {
              "name": "status",
              "readableName": "Status",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": false,
            "type": "string",
            "enum": [
              "open",
              "in_progress",
              "resolved",
              "closed"
            ]
          },
          "priority": {
            "x-rhino-attribute": {
              "name": "priority",
              "readableName": "Priority",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": false,
            "type": "string",
            "enum": [
              "low",
              "medium",
              "high",
              "critical"
            ]
          },
          "due_date": {
            "x-rhino-attribute": {
              "name": "due_date",
              "readableName": "Due Date",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": false,
            "type": "string",
            "format": "datetime"
          },
          "created_at": {
            "x-rhino-attribute": {
              "name": "created_at",
              "readableName": "Created At",
              "readable": true,
              "creatable": false,
              "updatable": false
            },
            "readOnly": true,
            "nullable": false,
            "type": "string",
            "format": "datetime"
          },
          "updated_at": {
            "x-rhino-attribute": {
              "name": "updated_at",
              "readableName": "Updated At",
              "readable": true,
              "creatable": false,
              "updatable": false
            },
            "readOnly": true,
            "nullable": false,
            "type": "string",
            "format": "datetime"
          },
          "project": {
            "x-rhino-attribute": {
              "name": "project",
              "readableName": "Project",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": false,
            "type": "reference",
            "anyOf": [
              {
                "$ref": "#/components/schemas/project"
              }
            ]
          },
          "assignee": {
            "x-rhino-attribute": {
              "name": "assignee",
              "readableName": "Assignee",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": true,
            "type": "reference",
            "anyOf": [
              {
                "$ref": "#/components/schemas/user"
              }
            ]
          },
          "reporter": {
            "x-rhino-attribute": {
              "name": "reporter",
              "readableName": "Reporter",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": false,
            "type": "reference",
            "anyOf": [
              {
                "$ref": "#/components/schemas/user"
              }
            ]
          }
        },
        "required": [
          "title",
          "description",
          "category",
          "status",
          "priority",
          "due_date",
          "project",
          "reporter"
        ]
      },
      "comment": {
        "x-rhino-model": {
          "model": "comment",
          "modelPlural": "comments",
          "name": "comment",
          "pluralName": "comments",
          "readableName": "Comment",
          "pluralReadableName": "Comments",
          "ownedBy": "ticket",
          "singular": false,
          "path": "/api/comments",
          "searchable": false
        },
        "type": "object",
        "properties": {
          "id": {
            "x-rhino-attribute": {
              "name": "id",
              "readableName": "Id",
              "readable": true,
              "creatable": false,
              "updatable": false
            },
            "readOnly": true,
            "nullable": false,
            "type": "identifier"
          },
          "content": {
            "x-rhino-attribute": {
              "name": "content",
              "readableName": "Content",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": false,
            "type": "text"
          },
          "created_at": {
            "x-rhino-attribute": {
              "name": "created_at",
              "readableName": "Created At",
              "readable": true,
              "creatable": false,
              "updatable": false
            },
            "readOnly": true,
            "nullable": false,
            "type": "string",
            "format": "datetime"
          },
          "updated_at": {
            "x-rhino-attribute": {
              "name": "updated_at",
              "readableName": "Updated At",
              "readable": true,
              "creatable": false,
              "updatable": false
            },
            "readOnly": true,
            "nullable": false,
            "type": "string",
            "format": "datetime"
          },
          "ticket": {
            "x-rhino-attribute": {
              "name": "ticket",
              "readableName": "Ticket",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": false,
            "type": "reference",
            "anyOf": [
              {
                "$ref": "#/components/schemas/ticket"
              }
            ]
          },
          "commenter": {
            "x-rhino-attribute": {
              "name": "commenter",
              "readableName": "Commenter",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": false,
            "type": "reference",
            "anyOf": [
              {
                "$ref": "#/components/schemas/user"
              }
            ]
          }
        },
        "required": [
          "content",
          "ticket",
          "commenter"
        ]
      }
    }
  },
  "paths": {
    "/api/attachments": {
      "get": {
        "operationId": "active_storage_attachment-index",
        "parameters": [

        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/active_storage_attachment"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "active_storage_attachment"
        ]
      },
      "post": {
        "operationId": "active_storage_attachment-create",
        "parameters": [

        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/active_storage_attachment"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "active_storage_attachment"
        ]
      }
    },
    "/api/attachments/:id": {
      "get": {
        "operationId": "active_storage_attachment-show",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/active_storage_attachment"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "active_storage_attachment"
        ]
      },
      "patch": {
        "operationId": "active_storage_attachment-update",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/active_storage_attachment"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "active_storage_attachment"
        ]
      },
      "put": {
        "operationId": "active_storage_attachment-update",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/active_storage_attachment"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "active_storage_attachment"
        ]
      },
      "delete": {
        "operationId": "active_storage_attachment-destroy",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/active_storage_attachment"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "active_storage_attachment"
        ]
      }
    },
    "/api/users": {
      "get": {
        "operationId": "user-index",
        "parameters": [

        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/user"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "user"
        ]
      },
      "post": {
        "operationId": "user-create",
        "parameters": [

        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/user"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "user"
        ]
      }
    },
    "/api/users/:id": {
      "get": {
        "operationId": "user-show",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/user"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "user"
        ]
      },
      "patch": {
        "operationId": "user-update",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/user"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "user"
        ]
      },
      "put": {
        "operationId": "user-update",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/user"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "user"
        ]
      },
      "delete": {
        "operationId": "user-destroy",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/user"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "user"
        ]
      }
    },
    "/api/account": {
      "get": {
        "operationId": "account-show",
        "parameters": [

        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/account"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "account"
        ]
      },
      "patch": {
        "operationId": "account-update",
        "parameters": [

        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/account"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "account"
        ]
      },
      "put": {
        "operationId": "account-update",
        "parameters": [

        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/account"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "account"
        ]
      }
    },
    "/api/organizations": {
      "get": {
        "operationId": "organization-index",
        "parameters": [

        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/organization"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "organization"
        ]
      },
      "post": {
        "operationId": "organization-create",
        "parameters": [

        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/organization"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "organization"
        ]
      }
    },
    "/api/organizations/:id": {
      "get": {
        "operationId": "organization-show",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/organization"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "organization"
        ]
      },
      "patch": {
        "operationId": "organization-update",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/organization"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "organization"
        ]
      },
      "put": {
        "operationId": "organization-update",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/organization"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "organization"
        ]
      },
      "delete": {
        "operationId": "organization-destroy",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/organization"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "organization"
        ]
      }
    },
    "/api/users_roles": {
      "get": {
        "operationId": "users_role-index",
        "parameters": [

        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/users_role"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "users_role"
        ]
      },
      "post": {
        "operationId": "users_role-create",
        "parameters": [

        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/users_role"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "users_role"
        ]
      }
    },
    "/api/users_roles/:id": {
      "get": {
        "operationId": "users_role-show",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/users_role"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "users_role"
        ]
      },
      "patch": {
        "operationId": "users_role-update",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/users_role"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "users_role"
        ]
      },
      "put": {
        "operationId": "users_role-update",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/users_role"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "users_role"
        ]
      },
      "delete": {
        "operationId": "users_role-destroy",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/users_role"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "users_role"
        ]
      }
    },
    "/api/roles": {
      "get": {
        "operationId": "role-index",
        "parameters": [

        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/role"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "role"
        ]
      }
    },
    "/api/roles/:id": {
      "get": {
        "operationId": "role-show",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/role"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "role"
        ]
      }
    },
    "/api/users_role_invites": {
      "get": {
        "operationId": "users_role_invite-index",
        "parameters": [

        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/users_role_invite"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "users_role_invite"
        ]
      },
      "post": {
        "operationId": "users_role_invite-create",
        "parameters": [

        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/users_role_invite"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "users_role_invite"
        ]
      }
    },
    "/api/users_role_invites/:id": {
      "get": {
        "operationId": "users_role_invite-show",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/users_role_invite"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "users_role_invite"
        ]
      },
      "patch": {
        "operationId": "users_role_invite-update",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/users_role_invite"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "users_role_invite"
        ]
      },
      "put": {
        "operationId": "users_role_invite-update",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/users_role_invite"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "users_role_invite"
        ]
      },
      "delete": {
        "operationId": "users_role_invite-destroy",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/users_role_invite"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "users_role_invite"
        ]
      }
    },
    "/api/projects": {
      "get": {
        "operationId": "project-index",
        "parameters": [

        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/project"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "project"
        ]
      },
      "post": {
        "operationId": "project-create",
        "parameters": [

        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/project"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "project"
        ]
      }
    },
    "/api/projects/:id": {
      "get": {
        "operationId": "project-show",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/project"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "project"
        ]
      },
      "patch": {
        "operationId": "project-update",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/project"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "project"
        ]
      },
      "put": {
        "operationId": "project-update",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/project"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "project"
        ]
      },
      "delete": {
        "operationId": "project-destroy",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/project"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "project"
        ]
      }
    },
    "/api/tickets": {
      "get": {
        "operationId": "ticket-index",
        "parameters": [

        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ticket"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "ticket"
        ]
      },
      "post": {
        "operationId": "ticket-create",
        "parameters": [

        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ticket"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "ticket"
        ]
      }
    },
    "/api/tickets/:id": {
      "get": {
        "operationId": "ticket-show",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ticket"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "ticket"
        ]
      },
      "patch": {
        "operationId": "ticket-update",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ticket"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "ticket"
        ]
      },
      "put": {
        "operationId": "ticket-update",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ticket"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "ticket"
        ]
      },
      "delete": {
        "operationId": "ticket-destroy",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ticket"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "ticket"
        ]
      }
    },
    "/api/comments": {
      "get": {
        "operationId": "comment-index",
        "parameters": [

        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/comment"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "comment"
        ]
      },
      "post": {
        "operationId": "comment-create",
        "parameters": [

        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/comment"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "comment"
        ]
      }
    },
    "/api/comments/:id": {
      "get": {
        "operationId": "comment-show",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/comment"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "comment"
        ]
      },
      "patch": {
        "operationId": "comment-update",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/comment"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "comment"
        ]
      },
      "put": {
        "operationId": "comment-update",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/comment"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "comment"
        ]
      },
      "delete": {
        "operationId": "comment-destroy",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/comment"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "comment"
        ]
      }
    }
  },
  "info": {
    "title": "RhinoTemplate API",
    "version": "0.0.0",
    "x-rhino": {
      "modules": {
        "rhino": {
          "version": "0.25.0.beta.17",
          "authOwner": "user",
          "baseOwner": "organization",
          "oauth": [

          ],
          "allow_signup": true
        },
        "rhino_organizations": {
          "version": "0.25.0.beta.17"
        }
      }
    }
  }
};

export default api;
