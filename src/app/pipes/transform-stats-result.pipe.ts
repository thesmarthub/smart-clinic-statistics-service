import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformStatsResult'
})
export class TransformStatsResultPipe implements PipeTransform {

  transform(value: unknown, arg): unknown {
    const splitTitles = arg.split(".");
    if (splitTitles.length < 1) {
      return value
    }

    console.log(value, arg)
    let result = JSON.parse(JSON.stringify(value));

    splitTitles.forEach((splitTitle, index) => {
      if (index === 0) {
        result = value[splitTitle];
        return
      }
      result = JSON.parse(JSON.stringify(result[splitTitle]));
    })



    return result;
  }

}
