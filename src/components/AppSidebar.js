import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'

import {
  CCloseButton,
  CSidebar,
  CSidebarBrand,
  CSidebarFooter,
  CSidebarHeader,
  CSidebarToggler,
  CTooltip
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import { AppSidebarNav } from './AppSidebarNav'

import { logo } from 'src/assets/brand/logo'
import { sygnet } from 'src/assets/brand/sygnet'

// sidebar nav config
import navigation from '../_nav'

const AppSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)

  const navigate = useNavigate(); // Inisialisasi useNavigate\
  const handleSidebarToggle = () => {
    // Reset localStorage
    localStorage.clear(); // Atau gunakan localStorage.removeItem('key') jika hanya ingin menghapus item tertentu

    // Redirect ke halaman login
    navigate('/login');

    // Dispatch action untuk toggle sidebar
    // dispatch({ type: 'set', sidebarUnfoldable: !unfoldable });
  };


  return (
    <CSidebar
      className="border-end"
      colorScheme="dark"
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible })
      }}
    >
      <CSidebarHeader className="border-bottom">
        <CSidebarBrand to="/">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src="src/assets/brand/PosIND_Reverse Color 1.png" alt="Logo" className="sidebar-brand-full" height={32} />
            <span style={{ marginLeft: '20px', fontSize: '18px', fontWeight: 'bold', color: '#fff' }}>PT. Pos Indonesia</span>
          </div>
          <CIcon customClassName="sidebar-brand-narrow" icon={sygnet} height={32} />
        </CSidebarBrand>

        <CCloseButton
          className="d-lg-none"
          dark
          onClick={() => dispatch({ type: 'set', sidebarShow: false })}
        />
      </CSidebarHeader>
      <AppSidebarNav items={navigation} />
      <CSidebarFooter className="border-top d-none d-lg-flex">
        <CTooltip content="Log Out">
          <CSidebarToggler
            // onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
            onClick={handleSidebarToggle}
          />
        </CTooltip>
      </CSidebarFooter>
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
