import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { VscodeConfig } from './vscodeConfig.model';
import { VscodeConfigService } from './vscodeConfig.service';

@Controller('vscode-config')
export class VscodeConfigController {
  constructor(private readonly vscodeConfigService: VscodeConfigService) {}

  @Post()
  async create(@Body() vscodeConfig: VscodeConfig): Promise<VscodeConfig> {
    return this.vscodeConfigService.create(vscodeConfig);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<VscodeConfig> {
    return this.vscodeConfigService.findById(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    this.vscodeConfigService.delete(id);
  }
}
