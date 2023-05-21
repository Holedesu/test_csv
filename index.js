import _ from 'lodash';

export default function solution(content){
  // BEGIN

  const graph_split = '\r\n';
  const formatted_content = content.split(graph_split);
  const info_column = [];
  const number_of_ports = []
  let survived_num = 0
  let man_woman_count = {
    man_number: 0,
    woman_number: 0
  }
  let names_begin_with_a = 0
  for (let element in formatted_content) {
    const column_split = ','
    const formatted_column = formatted_content[element].split(column_split)
    info_column.push(formatted_column)
  }
  for (let passenger_info in info_column) {
    let port = info_column[passenger_info][12];
    let gender = info_column[passenger_info][5];
    let survived = info_column[passenger_info][1];
    let first_name = info_column[passenger_info][4]
    if (!number_of_ports.includes(port) && (port !== undefined) && (port !== '')) {
      number_of_ports.push(info_column[passenger_info][12])
    }

    if (gender === 'male') {
      man_woman_count['man_number'] += 1
    } else {
      man_woman_count['woman_number'] += 1
    }

    if (survived === '1') {
      survived_num += 1
    }

    if ((first_name !== undefined) && first_name.includes('A')) {
          names_begin_with_a += 1

    }


  }
  const number_of_passengers = info_column[info_column.length - 2][0]

  // ANSWERS
  console.log(number_of_passengers)
  console.log(number_of_ports)
  console.log(man_woman_count)
  console.log(survived_num)
  console.log(names_begin_with_a)
  // END
}
