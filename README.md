# @inspetor-industrial/calibration-report-scripts

Scripts para relatórios de calibração utilizando Puppeteer.

## Instalação

Você pode instalar o pacote usando pnpm, npm ou yarn:

### Usando pnpm
```bash
pnpm install @inspetor-industrial/calibration-report-scripts
```

### Usando npm
```bash
npm install @inspetor-industrial/calibration-report-scripts
```

### Usando yarn
```bash
yarn add @inspetor-industrial/calibration-report-scripts
```

## Uso

Este pacote fornece várias funções para gerar relatórios em diferentes formatos a partir de uma URL. Abaixo está um exemplo de como usar as funções disponíveis:

### Exemplo de Uso

#### Gerar PDF
```typescript
import { generatePdf } from '@inspetor-industrial/calibration-report-scripts';

const reportUrl = 'https://exemplo.com/relatorio';
const reportName = 'meu-relatorio';

generatePdf(reportUrl, reportName)
  .then(() => {
    console.log('PDF gerado com sucesso!');
  })
  .catch((error) => {
    console.error('Erro ao gerar o PDF:', error);
  });
```

### Possíveis Adições Futuras

1. **Geração de PNG/JPEG**: Função para gerar relatórios em formatos de imagem como PNG ou JPEG.
2. **Configuração de Opções de PDF**: Função para personalizar o comportamento da geração do PDF, incluindo tamanho de página e margens.
3. **Manipulação de Elementos na Página**: Função para interagir com elementos na página antes de gerar o PDF.