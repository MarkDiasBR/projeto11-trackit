//Mediante resolução da Letícia Chijo

import dayjs from 'dayjs';
import ptBr from "dayjs/locale/pt-br";
import styled from 'styled-components';

export default function Date() {
    let date = dayjs().date();
    let month = dayjs().month() + 1;
    let weekDay = dayjs().day();
    let weekDayExtended = dayjs(weekDay).locale(ptBr).format('dddd').replace("-feira", "");

    if (date < 10) {
        date = 0 + date.toString();
    }

    if (month < 10) {
        month = 0 + month.toString();
    }

    function capitalizeText(text) {
        const firstLetter = text.charAt(0).toUpperCase();
        const restOfText = text.substring(1);
        return (firstLetter + restOfText)
    }

    return (
        <p>{capitalizeText(weekDayExtended)}, {date}/{month}</p>
    )
}