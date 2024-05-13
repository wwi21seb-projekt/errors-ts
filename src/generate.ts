// generate.ts
import { writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

interface CustomError {
  title: string;
  message: string;
  code: string;
  http_status: number;
}

// Calculate the directory of the current module using new ESM features
const currentDir = dirname(fileURLToPath(import.meta.url));

// Download the JSON file from the GitHub repository https://raw.githubusercontent.com/wwi21seb-projekt/error-domain/main/errors.json
const response = await fetch(
  "https://raw.githubusercontent.com/wwi21seb-projekt/error-domain/main/errors.json"
);
if (!response.ok) {
  throw new Error(`HTTP error! status: ${response.status}`);
}

const errors: CustomError[] = await response.json();

let content = `/** GENERATED FILE - DO NOT MODIFY DIRECTLY **/
export class CustomError extends Error {
    code: string;
    httpStatus: number;

    constructor(message: string, code: string, httpStatus: number) {
        super(message);
        this.code = code;
        this.httpStatus = httpStatus;
    }
}\n\n`;

errors.forEach((error) => {
  content += `export const ${error.title} = new CustomError(\n\t"${error.message}", \n\t"${error.code}", \n\t${error.http_status}\n);\n`;
});

// Specify the output path for the generated TypeScript file
const outputPath = join(currentDir, "../src/errors.ts");
writeFileSync(outputPath, content);
