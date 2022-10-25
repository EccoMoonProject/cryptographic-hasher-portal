import { Injectable } from '@nestjs/common';
import { createHash } from 'crypto';
@Injectable()
export class AppService {
  getHash(message: string): string {
    return createHash('sha256').update(message).digest('hex');
  }

  getHash512(message: string): string {
    return createHash('sha512').update(message).digest('hex');
  }
  getHashWhirlpool(message: string): string {
    return createHash('whirlpool').update(message).digest('hex');
  }
}
