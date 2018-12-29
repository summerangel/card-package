/**
 * Created by summer on 2018/12/11.
 */
import React, { Component } from 'react';
import { isEmpty } from 'lodash';
import CardItem from '../../components/CardItem/CardItem';
import api, { request } from '../../utils/request';
import './CardList.scss';

const CARD_LIST = [
    {
        cardId: 1,
        name: '盖璞（上海）商业有限公司',
        describe: '挚蓝优享会员卡',
        url: 'gap.jpeg',
        logoUrl: 'gapLogo.jpeg'
    },
    {
        cardId: 2,
        name: '全家FamilyMart',
        describe: '全家微会员',
        url: 'family.jpeg',
        logoUrl: 'familyLogo.jpeg'
    },
    {
        cardId: 3,
        name: '绿茶餐饮连锁机构',
        describe: '会员卡',
        url: 'greenTea.jpeg',
        logoUrl: 'greenTeaLogo.jpeg'
    },
    {
        cardId: 4,
        name: '桂满陇',
        describe: '会员卡',
        url: 'guimanlong.jpeg',
        logoUrl: 'guimanlongLogo.jpeg'
    },
    {
        cardId: 5,
        name: 'innisfree',
        describe: '悦诗风吟会员卡',
        url: 'innisfree.jpeg',
        logoUrl: 'innisfreeLogo.jpeg'
    },
    {
        cardId: 6,
        name: '南京大排档',
        describe: '会员卡',
        url: 'nanjing.jpeg',
        logoUrl: 'nanjingLogo.jpeg'
    }
];

export default class CardList extends Component {
    state = {
      cardList: []
    };

    componentDidMount() {
      this.fetchCardList();
    }

    fetchCardList = () => {
      request.post(api.GW_INTERACT_API, {serviceName: 'cardList'})
        .then(res => {
          if (!isEmpty(res)) {
            this.setState({
              cardList: res
            })
          }
        })
        .catch(e => {
          console.log(e);
        })
    };

    handleClickGo = (id) => {
        window.location.href = `/card/card-detail/${id}`;
        // window.location.href = `/card/card-detail`;
    };

    render() {
        let { cardList } = this.state;
        return (
            <div className="card-list-wrapper">
                <div className="card">
                    {
                        !isEmpty(cardList) && cardList.map((card, index) => {
                            return (
                                <CardItem
                                    key={index}
                                    name={card.issuerName}
                                    bgStyle={{
                                        // backgroundImage: `url(${require('../../assets/' + card.url)})`
                                        backgroundImage: `url(${card.cardUrl})`
                                    }}
                                    logoIcon={card.logoUrl}
                                    describe={card.cardName}
                                    onClickGo={()=>{
                                        this.handleClickGo(card.cardNo);
                                    }}
                                />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
