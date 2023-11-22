import React, { useState } from 'react';
import { Layout } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { Drawer, Radio, Switch } from 'antd';
const { Content } = Layout;

const ColorPicker = ({ value, onChange }) => {
    return (
        <Radio.Group value={value} onChange={onChange} style={{ marginTop: 16 }}>
            <Radio.Button value="color1" style={{ backgroundColor: '#f44336', width: 30, height: 30, marginRight: 8 }}></Radio.Button>
            <Radio.Button value="color2" style={{ backgroundColor: '#4CAF50', width: 30, height: 30, marginRight: 8 }}></Radio.Button>
            <Radio.Button value="color3" style={{ backgroundColor: '#2196F3', width: 30, height: 30 }}></Radio.Button>
        </Radio.Group>
    );
};

const SettingsPanel = ({ isVisible, onClose }) => {
    const handleThemeChange = (e) => {
        console.log(e.target.value);
    };

    return (
        <Drawer title="设置背景" placement="right" onClose={onClose} open={isVisible} mask={false} >
            <div>
                <h3>主题色</h3>
                <ColorPicker value={'color1'} onChange={handleThemeChange} />
            </div>

            <div style={{ marginTop: 48 }}>
                <h3>导航模式</h3>
                <Radio.Group>
                    <Radio value="side">侧边导航栏</Radio>
                    <Radio value="top">顶部导航栏</Radio>
                </Radio.Group>
            </div>

            <div style={{ marginTop: 48 }}>
                <h3>内容区域</h3>
                <div style={{ marginBottom: 16 }}> {/* 添加容器并设置下边距 */}
                    <span>顶栏：</span> <Switch />
                </div>
                <div>
                    <span>菜单栏：</span> <Switch />
                </div>
            </div>
        </Drawer>
    );
};

const ContentArea =  ({ children })  => {
    const [isSettingsVisible, setIsSettingsVisible] = useState(false);

    const toggleSettings = () => {
        setIsSettingsVisible(!isSettingsVisible);
    };
    return (
        <Content style={{ position: 'relative', margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            {children}
            <SettingOutlined onClick={toggleSettings} style={{ backgroundColor: '#05C2FE', position: 'absolute', top: 300, right: 0, fontSize: '20px', padding: '5px', cursor: 'pointer' }} />
            {isSettingsVisible && (
                <SettingsPanel isVisible={isSettingsVisible} onClose={() => setIsSettingsVisible(false)} />
            )}
        </Content>
    );
};

export default ContentArea;
