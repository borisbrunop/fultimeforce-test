import { ConfigOptions, v2 } from 'cloudinary';
import { CLOUDINARY } from './constants';

export const CloudinaryProvider = {
  provide: CLOUDINARY,
  useFactory: (): ConfigOptions => {
    return v2.config({
      cloud_name: 'cormineco',
      api_key: '163954872246677',
      api_secret: 'LA_k47T84Dm8A3yrvDh3LlDvXtU',
    });
  },
};