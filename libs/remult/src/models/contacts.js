"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = void 0;
const remult_1 = require("remult");
let Contact = class Contact {
    id;
    name;
    email;
    phone;
    message;
};
exports.Contact = Contact;
__decorate([
    remult_1.Fields.id(),
    __metadata("design:type", String)
], Contact.prototype, "id", void 0);
__decorate([
    remult_1.Fields.string({
        validate: [
            remult_1.Validators.required('Name is required'),
        ]
    }),
    __metadata("design:type", String)
], Contact.prototype, "name", void 0);
__decorate([
    remult_1.Fields.string({
        validate: [
            remult_1.Validators.required('Email is required'),
            remult_1.Validators.email('Invalid email address'),
        ]
    }),
    __metadata("design:type", String)
], Contact.prototype, "email", void 0);
__decorate([
    remult_1.Fields.string({
        validate: [
            remult_1.Validators.required('Phone is required'),
        ]
    }),
    __metadata("design:type", String)
], Contact.prototype, "phone", void 0);
__decorate([
    remult_1.Fields.string({
        validate: [
            remult_1.Validators.required('Message is required'),
        ]
    }),
    __metadata("design:type", String)
], Contact.prototype, "message", void 0);
exports.Contact = Contact = __decorate([
    (0, remult_1.Entity)('contacts', {
        id: (contact) => contact.id,
        allowApiCrud: false,
        allowApiInsert: true
    })
], Contact);
