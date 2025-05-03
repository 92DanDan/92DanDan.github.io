const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// 获取角色数据
app.get('/api/characters', (req, res) => {
  const data = fs.readFileSync('characters.json');
  res.json(JSON.parse(data));
});

// 更新角色货币
app.post('/api/update', (req, res) => {
  const { id, currency } = req.body;
  const data = JSON.parse(fs.readFileSync('characters.json'));

  if (data[id]) {
    if (currency === 'bronze') data[id].bronze += 1;
    if (currency === 'silver') data[id].silver += 1;
    if (currency === 'gold') data[id].gold += 1;
    if (currency === 'diamond') data[id].diamond += 1;

    fs.writeFileSync('characters.json', JSON.stringify(data, null, 2));
    res.json({ success: true });
  } else {
    res.status(400).json({ success: false, error: '角色不存在' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
