import express, { json } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();

// __dirname 대체 코드
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 정적 파일 제공 설정
app.use(express.static(__dirname));

// 미들웨어 설정
app.use(express.urlencoded({ extended: true })); // URL-encoded 형식의 요청 본문을 파싱
app.use(express.json()); // JSON 형식의 요청 본문을 파싱

app.get('/', (_, response) => {
    response.sendFile(path.join(__dirname, 'index.html'));
});

const port = 8000;
app.listen(port, () => {
    console.log(`http://127.0.0.1:${port}/ 서버 프로세스가 ${port}번 포트에서 실행 중입니다.`);
});

app.post('/simple', (request, response) => {
    console.log('body: ', request.body);
    response.json({ message: '요청이 성공적으로 처리되었습니다.', data: request.body });
});