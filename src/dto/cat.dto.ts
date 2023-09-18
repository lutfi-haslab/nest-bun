import { ApiProperty } from "@nestjs/swagger";

export class CreateCatDto {
  name: string;
  age: number;
  breed: string;
}

export class FileUploadDto {
  @ApiProperty({ type: 'string', format: 'binary' })
  file: any;
}


export class FilesUploadDto {
  @ApiProperty({ type: 'array', items: { type: 'string', format: 'binary' } })
  files: any[];
}
