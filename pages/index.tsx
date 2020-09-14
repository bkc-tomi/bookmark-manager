import { useRouter } from 'next/router';
import { useEffect } from "react";
import FB from "../firebase/init";
import Layout from "../components/layout";
import { Login } from "../components/login";
import Styles from "../styles/index.module.css";
import { Svg } from "../components/svg";

export default function Index() {
    const router = useRouter();
    useEffect(() => {
        FB.auth().onAuthStateChanged((user:firebase.User) => {
            if (user) {
                router.push("/[user]", `/${user.uid}`);
            }
        });
    }, []);
    return (
        <Layout>
            <div className={ Styles.outer }>
                <div className={ Styles.articleArea }>
                    <div>
                        <Svg
                            width={ 300 }
                            height={ 80 }
                            rotate={ 0 }
                            shadowColor="#16776f"
                        >
                        <svg height="100%" viewBox="0 0 1200 350">
                        <defs/>
                        <g id="レイヤー 3 copy" fill="#ffffff">
                        <path d="M247.834+66.5638L1184.2+66.5638L1184.2+85.2405L247.834+85.2405L247.834+66.5638Z" strokeLinecap="butt" opacity="1" strokeLinejoin="round"/>
                        </g>
                        <g id="レイヤー 2" fill="#f5af19">
                        <g opacity="1">
                        <path d="M141.687+18.4731C139.511+20.5961+138.099+23.4793+137.963+26.6669L136.445+62.3004L183.257+79.5433C185.067+75.6186+187.542+71.9801+190.765+68.8358C206.427+53.5591+232.93+55.3815+249.954+72.8923C266.978+90.4032+268.083+116.978+252.421+132.255C236.76+147.531+210.267+145.72+193.243+128.209C188.669+123.504+185.276+118.142+183.016+112.522L134.067+117.583L132.487+154.685C132.214+161.06+135.825+170.164+140.551+175.024L217.55+254.225L294.56+333.436C299.285+338.296+306.624+338.798+310.971+334.558L381.81+265.46L452.649+196.362C456.997+192.122+456.7+184.751+451.975+179.891L374.965+100.68L297.966+21.479C293.241+16.6187+284.251+12.7613+277.881+12.8649L149.974+14.9514C146.789+15.0032+143.864+16.3501+141.687+18.4731Z" strokeLinecap="butt" opacity="1" strokeLinejoin="round"/>
                        <path d="M206.055+101.629L16.0718+118.451C11.4571+118.86+7.80356+115.399+7.91135+110.72L9.47277+42.9529C9.58056+38.2745+13.3736+35.6838+17.9447+37.1665L206.134+98.2044C210.705+99.687+210.67+101.22+206.055+101.629Z" strokeLinecap="butt" opacity="1" strokeLinejoin="round"/>
                        </g>
                        </g>
                        <g id="レイヤー 1" fill="#ffffff">
                        <g opacity="1">
                        <path d="M132.339+331.921C121.974+331.921+112.904+330.711+105.13+328.289C97.3562+325.868+90.7505+322.533+85.313+318.285C79.8755+314.037+75.5425+308.961+72.314+303.056C69.0855+297.151+66.8765+290.673+65.687+283.621L95.126+283.621C96.1455+287.954+97.6323+291.99+99.5864+295.728C101.541+299.466+104.026+302.716+107.042+305.477C110.058+308.238+113.626+310.405+117.747+311.977C121.867+313.549+126.647+314.334+132.084+314.334C135.652+314.334+139.199+313.952+142.725+313.187C146.251+312.423+149.416+311.17+152.22+309.428C155.023+307.686+157.275+305.435+158.974+302.674C160.673+299.912+161.523+296.493+161.523+292.415C161.523+287.317+160.206+282.771+157.572+278.778C154.938+274.785+151.455+271.153+147.122+267.882C142.789+264.611+137.861+261.574+132.339+258.77C126.816+255.966+121.167+253.141+115.389+250.295C109.612+247.449+103.962+244.454+98.4395+241.31C92.917+238.167+87.9893+234.662+83.6563+230.797C79.3233+226.931+75.8399+222.555+73.2061+217.67C70.5723+212.785+69.2554+207.199+69.2554+200.912C69.2554+194.03+70.7635+187.679+73.7796+181.859C76.7957+176.039+81.1499+170.984+86.8423+166.694C92.5347+162.403+99.5015+159.047+107.743+156.626C115.984+154.204+125.372+152.994+135.907+152.994C144.573+152.994+152.432+154.183+159.484+156.562C166.536+158.941+172.759+162.233+178.154+166.439C183.549+170.644+188.073+175.572+191.727+181.222C195.38+186.872+198.184+192.925+200.138+199.382L173.502+199.382C171.973+195.304+170.189+191.396+168.15+187.658C166.111+183.919+163.605+180.648+160.631+177.845C157.657+175.041+154.046+172.811+149.798+171.154C145.55+169.497+140.495+168.669+134.633+168.669C129.11+168.669+124.459+169.391+120.678+170.835C116.897+172.28+113.86+174.128+111.566+176.379C109.272+178.631+107.615+181.137+106.596+183.898C105.576+186.659+105.066+189.357+105.066+191.991C105.066+196.579+106.426+200.742+109.145+204.48C111.863+208.218+115.453+211.702+119.913+214.93C124.374+218.159+129.45+221.238+135.143+224.17C140.835+227.101+146.634+230.053+152.538+233.027C158.443+236+164.242+239.123+169.934+242.394C175.626+245.665+180.703+249.254+185.163+253.163C189.624+257.071+193.213+261.404+195.932+266.162C198.651+270.919+200.01+276.272+200.01+282.219C200.01+289.271+198.566+295.813+195.677+301.845C192.789+307.877+188.498+313.124+182.806+317.584C177.113+322.045+170.04+325.549+161.587+328.098C153.133+330.647+143.384+331.921+132.339+331.921Z" opacity="1"/>
                        <path d="M280.936+247.045L280.936+329.373L238.498+329.373L238.498+156.562L280.936+156.562L280.936+232.262L350.391+232.262L350.391+156.562L392.447+156.562L392.447+329.373L350.391+329.373L350.391+247.045L280.936+247.045Z" opacity="1"/>
                        <path d="M435.777+156.562L478.087+156.562L478.087+329.373L435.777+329.373L435.777+156.562Z" opacity="1"/>
                        <path d="M615.214+333.196C601.281+333.196+588.282+330.944+576.217+326.441C564.153+321.938+553.703+315.63+544.867+307.516C536.031+299.403+529.085+289.759+524.03+278.587C518.975+267.415+516.447+255.159+516.447+241.82C516.447+228.736+518.975+216.736+524.03+205.818C529.085+194.901+536.031+185.534+544.867+177.717C553.703+169.901+564.153+163.826+576.217+159.493C588.282+155.16+601.281+152.994+615.214+152.994C629.148+152.994+642.126+155.181+654.148+159.557C666.17+163.932+676.62+170.028+685.498+177.845C694.377+185.661+701.365+194.986+706.462+205.818C711.56+216.651+714.109+228.524+714.109+241.438C714.109+250.614+712.962+259.258+710.668+267.372C708.374+275.486+705.103+282.941+700.855+289.738C696.607+296.535+691.509+302.61+685.562+307.962C679.615+313.315+672.967+317.86+665.617+321.599C658.268+325.337+650.346+328.204+641.85+330.201C633.354+332.197+624.475+333.196+615.214+333.196ZM615.214+318.667C623.626+318.667+631.06+316.735+637.517+312.869C643.974+309.003+649.369+303.672+653.702+296.875C658.035+290.078+661.327+281.986+663.578+272.597C665.83+263.209+666.956+252.95+666.956+241.82C666.956+230.86+665.83+220.835+663.578+211.744C661.327+202.653+658.035+194.837+653.702+188.295C649.369+181.753+643.974+176.655+637.517+173.002C631.06+169.349+623.626+167.522+615.214+167.522C606.718+167.522+599.242+169.349+592.785+173.002C586.328+176.655+580.933+181.753+576.6+188.295C572.267+194.837+568.996+202.653+566.787+211.744C564.578+220.835+563.473+230.86+563.473+241.82C563.473+252.95+564.578+263.209+566.787+272.597C568.996+281.986+572.267+290.078+576.6+296.875C580.933+303.672+586.328+309.003+592.785+312.869C599.242+316.735+606.718+318.667+615.214+318.667Z" opacity="1"/>
                        <path d="M752.086+156.562L817.082+156.562C828.296+156.562+838.088+157.73+846.457+160.067C854.825+162.403+861.792+165.674+867.357+169.88C872.922+174.085+877.106+179.077+879.91+184.854C882.714+190.631+884.116+196.918+884.116+203.715C884.116+208.643+883.16+213.295+881.248+217.67C879.337+222.046+876.66+226.081+873.22+229.777C869.779+233.473+865.616+236.744+860.73+239.59C855.845+242.436+850.471+244.794+844.609+246.663L906.163+329.373L860.029+329.373L802.043+251.251L794.524+251.251L794.524+329.373L752.086+329.373L752.086+156.562ZM794.524+236.085L803.7+236.085C808.883+236.085+813.683+235.363+818.101+233.919C822.519+232.475+826.342+230.414+829.571+227.738C832.799+225.062+835.327+221.769+837.154+217.861C838.98+213.953+839.894+209.535+839.894+204.607C839.894+200.019+839.193+195.814+837.791+191.991C836.389+188.167+834.456+184.875+831.992+182.114C829.528+179.353+826.555+177.207+823.071+175.678C819.588+174.149+815.807+173.384+811.729+173.384L794.524+173.384L794.524+236.085Z" opacity="1"/>
                        <path d="M922.221+156.562L964.531+156.562L964.531+329.373L922.221+329.373L922.221+156.562Z" opacity="1"/>
                        <path d="M1007.86+156.562L1035.01+156.562L1133.52+266.416L1133.52+156.562L1160.03+156.562L1160.03+331.921L1141.8+331.921L1034.75+210.597L1034.75+329.373L1007.86+329.373L1007.86+156.562Z" opacity="1"/>
                        </g>
                        </g>
                        <g id="レイヤー 3" fill="#ffffff">
                        <path d="M237.834+110.564L1161.34+110.564L1161.34+129.24L237.834+129.24L237.834+110.564Z" strokeLinecap="butt" opacity="1" strokeLinejoin="round"/>
                        </g>
                        </svg>
                        </Svg>
                    </div>
                    <h3 className={ Styles.head }>ブックマークを快適に使用</h3>
                    <p className={ Styles.article }>
                        SHIORINはブックマークを管理するサイトです。
                        調べごとをしていてブックマークが大量になり、後から
                        <br />
                        <span style={{ fontSize: "20px" }}>「このサイトなんだっけ？」</span>
                        <br />
                        とわからなくなったことはありませんか？
                        このサイトはブックマークを登録する際にそのサイトの情報やなぜそのサイトを検索したかの
                        説明と説明のキーワードをタグとして一緒に保存します。
                        <br />
                        なので後からブックマークを探す時も楽ちんです。
                    </p>
                    <img className={ Styles.imgRight } src="/school_toshokan_hondana.png" />
                    <h3 className={ Styles.head }>解決策を持っているサイトの発見を快適に使用</h3>
                    <p className={ Styles.article }>
                       また、他のユーザーが公開しているブックマークを検索することもできます。
                       同じ問題を検索したユーザーいれば、Googleで検索するよりも早く自分に適したサイトを見つけることができるかも。 
                    </p>
                    <img className={ Styles.imgLeft + " " + Styles.hanten } src="/group_kids.png" />
                    <h3 className={ Styles.head }>安心して使おう</h3>
                    <p className={ Styles.article }>
                        認証とデータベースには、Googleが運営しているFirebaseを使用しています。
                        認証は、他のサイトのアカウントを使用する外部認証OAuthを使っています。
                        他のサイトのアカウントを使用するとはいえ、ユーザーネームやアイコンなどの一部の情報のみ
                        なので、個人情報が漏れる心配はありません。
                        セキュリティ面はバッチリです。
                    </p>
                    <img className={ Styles.imgRight } src="/anshin.png" />
                    <h3 className={ Styles.head }>使用している技術</h3>
                    <ul 
                        className={ Styles.article }
                        style={{ textAlign: "left" }}    
                    >
                        <li>typeScript:静的な型で安全にできるjavaScriptのトランスパイル言語</li>
                        <li>next.js:reactを使用したフレームワーク</li>
                        <li>react:UIを構築しモダンなサイトを作れるライブラリ</li>
                        <li>firebase:認証やデータベースなどバックエンドを担うサービス</li>
                        <li>tiny-segmenter:文章を単語に分ける形態素解析ツールライブラリ</li>
                        <li>自分の脳:これらのツールを使用してこのアプリを構築するのに使用</li>
                    </ul>
                    <img className={ Styles.imgLeft } src="/gijutsusyo.png" />
                </div>
                <div className={ Styles.loginArea }>
                    <div className={ Styles.loginDiv}>
                        <Login />
                    </div>
                </div>
            </div> 
        </Layout>
    );
}