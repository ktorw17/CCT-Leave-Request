const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', app: 'CCT Leave Request API' });
});

// TODO: เพิ่ม endpoint พนักงาน, ใบลา, อนุมัติ ฯลฯ

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`API running on port ${PORT}`));