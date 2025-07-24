import * as os from 'os';
import * as nodeCrypto from 'crypto';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

if (!global.crypto) {
  (global as any).crypto = nodeCrypto;
}

function getLocalExternalIp(): string | null {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    // Skip virtual adapters
    if (name.includes('vEthernet') || name.includes('WSL')) {
      continue;
    }
    for (const net of interfaces[name] || []) {
      if (net.family === 'IPv4' && !net.internal) {
        return net.address;
      }
    }
  }
  return null;
}

const localIp = process.env.SERVER_IP || getLocalExternalIp() || 'localhost';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

 
  const frontendOrigin = `http://${localIp}:5173`;

  app.enableCors({
    origin: frontendOrigin,
    credentials: true,
  });

  await app.listen(4000, '0.0.0.0');
  console.log(`✅ Backend running at: http://${localIp}:4000`);
  console.log(`✅ CORS allowed from: ${frontendOrigin}`);
}
bootstrap();
