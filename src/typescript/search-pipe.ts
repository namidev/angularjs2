import {Pipe} from 'angular2/core';

@Pipe({
  name: 'find'
})

export class SearchPipe {
  transform(pipeData, [pipeModifier]) {
    return pipeData.filter((item) =>{
      return item['name'].toLowerCase().includes(pipeModifier.toLowerCase());
    })
  }
}