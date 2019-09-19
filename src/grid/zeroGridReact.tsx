import React from 'react';
import {Grid} from 'zerogrid';
import {IDataConfig} from 'zerogrid/lib/ts/grid'
import { IColumnStyle } from 'zerogrid/lib/ts/model';
import { IRowData } from 'zerogrid/lib/ts/dataControl';

interface INewRowData extends IRowData{
    [fieldName:string]: any;
}

interface Props{
    gridID: string
    columns: Array<IColumnStyle>
    data: Array<INewRowData>
}

export class ZerogridReact extends React.Component<Props>{
    render(){
        const { gridID, columns, data } = this.props;
        const zerogridDiv = document.createElement(gridID)
        const dataConfig: IDataConfig = {columns: columns, data: data}
        new Grid(gridID, dataConfig);

        return ({zerogridDiv})
    }
}
