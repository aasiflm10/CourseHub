import CredentialsProvider from 'next-auth/providers/credentials';

export const NEXT_AUTH = {
    providers : [
        CredentialsProvider({
            name : 'Credentials',
            credentials : {
                username : {label : 'email', type : 'text', placeholder : 'Email'},
                password : {label : 'password', type : 'password', placeholder : 'password'}
            },
            async authorize(credentials : any) {
                return {
                    id : "user1",
                    name : "aasif",
                    email : "aa6125405@gmail.com"
                }
            }
        })
    ],
    secret : process.env.NEXTAUTH_SECRET
}