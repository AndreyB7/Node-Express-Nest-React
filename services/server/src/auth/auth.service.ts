import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    
    getHello(): string {
        return 'Hello Auth';
    }
    token(headers: any) {
        return {
            host: headers.host,
            token: headers.json,
        };
      }
}
// curl http://127.0.0.1:3000/auth/google -H "Authorization: Bearer ya29.a0AfH6SMCTbfP3lzLv1FYEB_T8K7hsYpqsGYs0Ax3kmHYPmBI6SYDeGP7tL3hADhsbcsPqIiBH86SttQOnUjSgXfAaJa4MBo8d2EnEkcqqBNx6LDQDXYZxzJ0Yh_eFa2cfqEQ6iZiSujt8u-Xo_Boebf4krTcrHmjyi-qw9KnotO4"