import _ from 'lodash';

export default function solution(content){
  // BEGIN

  const graph_split = '\r\n';
  const formatted_content = content.split(graph_split);
  const info_column = [];
  for (let element in formatted_content) {
    const column_split = ','
    const formatted_column = formatted_content[element].split(column_split)
    info_column.push(formatted_column)

  }

  console.log(info_column)

  // END
}
