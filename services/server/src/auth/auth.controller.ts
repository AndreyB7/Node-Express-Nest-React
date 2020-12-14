import { Controller, Get, Request } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth/google')
export class AuthController {
    constructor (public authService: AuthService) {}
        
    @Get()
    token(@Request() req ) {
        let jwt = '';
        if (req.headers.authorization) {
            jwt = req.headers.authorization.replace('Bearer ', '');
        }
        console.log(jwt);
        req.headers.json = jwt;
        return this.authService.token(req.headers);
    }

}
