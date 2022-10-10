import React, { Component } from 'react'
import NewsItem from './NewsItem'
import NewsList from './NewsList'

export default class Api extends Component {
    render() {
        return (
            <div>
                <NewsItem />
                <NewsList />
                
            </div>
        )
    }
}
