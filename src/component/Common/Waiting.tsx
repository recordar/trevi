import * as React from 'react';

export interface IWaitingProps {
  title: string;
  guidance: string;
  status: string;
}

const Waiting = (props: IWaitingProps) => {
  return (
    <div id="kakaoWrap">
      <main id="kakaoContent">
        <article id="mArticle">
          <div className="cont_error" style={{ paddingTop: '20%' }}>
            <img src="https://t1.daumcdn.net/kakaopay/billgates/new/img_bridge03.png" width="120" height="120" />
            <br />
            <strong className="tit_error">{props.title}</strong>
            <p className="desc_error" dangerouslySetInnerHTML={{ __html: props.guidance }} />
            <br />
            {props.status !== 'SUCCESS'
              && <div className="lds-spinner"><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /></div>
            }
          </div>
        </article>
      </main>
    </div>
  );
};

export default Waiting;
