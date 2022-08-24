import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    super({
      clientID:
        '803829844778-r94sf5t7qmuok3uaupop344aodklgc56.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: 'http://localhost:4000/google/callback',
      scope: ['email', 'profile'],
    });
  }

  async validate(
    accessToken: string,
    refresToken: string,
    profile: any,
    done: VerifyCallback,
  ): Promise<any> {
    const { name, emails, photos } = profile;
    const user = {
      email: emails[0].value,
      firstName: name.givenName,
      lasName: name.familkyName,
      picture: photos[0].value,
      accessToken,
    };
    done(null, user);
  }
}
