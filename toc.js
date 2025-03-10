// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="about.html">about</a></li><li class="chapter-item expanded "><a href="web-security.html"><strong aria-hidden="true">1.</strong> Web Security</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="security-headers.html"><strong aria-hidden="true">1.1.</strong> Security Headers</a></li><li class="chapter-item expanded "><a href="recon.html"><strong aria-hidden="true">1.2.</strong> Recon</a></li><li class="chapter-item expanded "><a href="enum.html"><strong aria-hidden="true">1.3.</strong> Enumeration</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="enum-folders.html"><strong aria-hidden="true">1.3.1.</strong> Folders</a></li></ol></li></ol></li><li class="chapter-item expanded "><a href="infra.html"><strong aria-hidden="true">2.</strong> Infra</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="shellwerkz.html"><strong aria-hidden="true">2.1.</strong> shellwerkz</a></li><li class="chapter-item expanded "><a href="dns-zone-transfer.html"><strong aria-hidden="true">2.2.</strong> DNS Zone Transfer</a></li></ol></li><li class="chapter-item expanded "><a href="networking.html"><strong aria-hidden="true">3.</strong> Networking</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="name-server-detection.html"><strong aria-hidden="true">3.1.</strong> Name Server detection</a></li><li class="chapter-item expanded "><a href="netcat.html"><strong aria-hidden="true">3.2.</strong> NetCat</a></li><li class="chapter-item expanded "><a href="port-forwarding.html"><strong aria-hidden="true">3.3.</strong> Port Forwarding</a></li><li class="chapter-item expanded "><a href="ssh.html"><strong aria-hidden="true">3.4.</strong> SSH</a></li></ol></li><li class="chapter-item expanded "><a href="programming.html"><strong aria-hidden="true">4.</strong> Programming</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="shared-memory.html"><strong aria-hidden="true">4.1.</strong> share memory</a></li><li class="chapter-item expanded "><a href="semaphores.html"><strong aria-hidden="true">4.2.</strong> semaphores</a></li><li class="chapter-item expanded "><a href="signals.html"><strong aria-hidden="true">4.3.</strong> signals</a></li></ol></li><li class="chapter-item expanded "><a href="openssl.html"><strong aria-hidden="true">5.</strong> OpenSSL</a></li><li class="chapter-item expanded "><a href="post-exploitation.html"><strong aria-hidden="true">6.</strong> Post-Exploitation</a></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">6.1.</strong> draft-pe</div></li></ol></li><li class="chapter-item expanded "><a href="linux-kernel.html"><strong aria-hidden="true">7.</strong> Linux Kernel</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="linux-kernel-modules.html"><strong aria-hidden="true">7.1.</strong> Modules</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="linux-kernel-mod-api.html"><strong aria-hidden="true">7.1.1.</strong> API</a></li></ol></li></ol></li><li class="chapter-item expanded "><a href="extracting.html"><strong aria-hidden="true">8.</strong> Extracting</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.</strong> block devices</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="mounting.html"><strong aria-hidden="true">9.1.</strong> Mounting</a></li><li class="chapter-item expanded "><a href="formatting.html"><strong aria-hidden="true">9.2.</strong> Formatting</a></li><li class="chapter-item expanded "><a href="partitions.html"><strong aria-hidden="true">9.3.</strong> Paritions</a></li></ol></li><li class="chapter-item expanded "><a href="containers-vms.html"><strong aria-hidden="true">10.</strong> containers &amp; vms</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="qemu.html"><strong aria-hidden="true">10.1.</strong> qemu</a></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
