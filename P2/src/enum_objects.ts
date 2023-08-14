// Enum
enum Roles {
    User = "Leonardo Maximoff",
    Admin = 0,
    SuperAdmin = 1
};

// Object
const roles = {
    User: "Leonardo C",
    Admin: 0,
    SuperAdmin: {
        bool: true,
        password: "sudo"
    }
}

console.log(Roles.Admin);
console.log(roles.SuperAdmin);