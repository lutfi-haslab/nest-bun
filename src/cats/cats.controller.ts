
import { Controller, Get, Post, Req, Res, Param, Body, HttpStatus, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiConsumes, ApiBody, ApiTags } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { CreateCatDto, FileUploadDto } from 'src/dto/cat.dto';

@Controller('cats')
@ApiTags('cats')
export class CatsController {
    @Post()

    create(@Body() createCatDto: CreateCatDto, @Res() res: Response) {
        res.status(HttpStatus.CREATED).send(`This action adds a new cat ${JSON.stringify(createCatDto)}`)
    }

    @Get(':id')
    findOne(@Param() params: { id: string }): string {
        return `This action returns a #${params.id} cat`;
    }

    @Get()
    findAll(@Res() res: Response) {
        res.status(HttpStatus.OK).send('This action returns all cats');
    }


    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    @ApiConsumes('multipart/form-data')
    @ApiBody({
        description: 'List of cats',
        type: FileUploadDto,
      })
    uploadFile(@UploadedFile() file: Express.Multer.File) {
        console.log(file);
    }
}
