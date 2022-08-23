import { PassportStrategy } from "@nestjs/passport";
import {Strategy, VerifyCallback} from "passport-google-oauth20"
import { Injectable } from "@nestjs/common";
import { stringify } from "querystring";


@Injectable()

export class GoogleStrategy extends PassportStrategy(Strategy, 'google'){
    constructor(){
        super({
            clientID: '803829844778-rccv5ip532gaj54aniiuuhb63ofu0jtn.apps.googleusercontent.com',
            clientSecret: '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',
            callbackUrl: 'http://localhost:3000/auth/google/callback',
            scope: ['email', 'profile']
        });
    }

        async validate(accessToken: string, refresToken: string, profile: any, done: VerifyCallback): Promise<any>{
            const {name, emails, photos} = profile;
            const user = {
                email: emails[0].value,
                firstName: name.givenName,
                lasName: name.familkyName,
                picture: photos[0].value,
                accessToken
            }
            done(null, user)
        }
}