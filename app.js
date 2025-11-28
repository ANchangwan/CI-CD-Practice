const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ message: '테스트 argoCD!' });
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy!!' });
});

if (require.main === module) {
  // 직접 실행될 때만 서버 시작
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = app;

