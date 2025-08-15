import { Entity, Fields, Validators } from 'remult'

@Entity<Contact>('contacts', {
    id: (contact) => contact.id,
    allowApiCrud: false,
    allowApiInsert: true
})
export class Contact {
    @Fields.id()
    id?: string

    @Fields.string({
        validate: [
            Validators.required('Name is required'),
        ]
    })
    name!: string

    @Fields.string({
        validate: [
            Validators.required('Email is required'),
            Validators.email('Invalid email address'),
        ]
    })
    email!: string

    @Fields.string({
        validate: [
            Validators.required('Phone is required'),
        ]
    })
    phone!: string

    @Fields.string({
        validate: [
            Validators.required('Message is required'),
        ]
    })
    message!: string
}