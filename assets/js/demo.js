class ClaimCenterDemo {
    constructor() {
        this.isProcessing = false;
        this.originalValues = {
            complexity: '2.5',
            grossIncurred: '$16,400.00',
            reserved: '$0.00',
            description: 'Insured hit other party\'s car on the front passenger side while making turn'
        };
        
        this.aiValues = {
            complexity: '9.1',
            grossIncurred: '$612,500.00',
            reserved: '$612,500.00',
            description: 'CRITICAL: T-bone collision - 69yr unconscious diabetic driver (Roberto), 8yr minor facial trauma (Sofia), 67yr elderly passenger (Maria). Multi-generational family claim requiring plastic surgery, cardiac monitoring, and specialized handling.'
        };
        
        this.init();
    }

    init() {
        this.bindEvents();
    }

    bindEvents() {
        document.getElementById('aiAnalysisBtn').addEventListener('click', () => this.showAIPanel());
        document.getElementById('btn1').addEventListener('click', () => this.processStep1());
        document.getElementById('btn2').addEventListener('click', () => this.processStep2());
        document.getElementById('btn3').addEventListener('click', () => this.processStep3());
        document.getElementById('btn4').addEventListener('click', () => this.processStep4());
        document.getElementById('modalClose').addEventListener('click', () => this.closeModal());
    }

    showAIPanel() {
        document.getElementById('aiPanel').style.display = 'block';
        document.getElementById('aiPanel').scrollIntoView({ behavior: 'smooth' });
    }

    async processStep1() {
        if (this.isProcessing) return;
        this.isProcessing = true;
        
        this.updateButton('btn1', 'processing', 'Processing Documents...');
        this.updateStatus('step1', 'PROCESSING...');
        
        await this.delay(3000);
        
        this.updateButton('btn1', 'complete', 'Documents Complete');
        this.updateStatus('step1', 'COMPLETE');
        this.enableButton('btn2');
        
        this.updateComplexity('6.5');
        this.showModal('Document Analysis Complete', `
            <h4>📊 Complexity Assessment: 2.5 → 6.5 (Moderate → High)</h4>
            <div style="margin: 12px 0;">
                <strong>Documents Processed:</strong>
                <ul style="margin: 8px 0; padding-left: 20px;">
                    <li>FNOL Intake Form - Family dynamics identified</li>
                    <li>Police Report - High-speed collision, unconscious driver</li>
                    <li>Medical Records - Minor facial trauma, elderly diabetic</li>
                    <li>Damage Photos - Tesla Model S extensive damage</li>
                </ul>
            </div>
            <div style="background: #fff3cd; padding: 12px; border-radius: 4px; margin: 12px 0;">
                <strong>⚠️ Critical Findings:</strong> Minor involvement (8-year-old Sofia), elderly unconscious driver (69-year-old Roberto), multi-generational family trauma
            </div>
        `);
        
        this.isProcessing = false;
    }

    async processStep2() {
        if (this.isProcessing) return;
        this.isProcessing = true;
        
        this.updateButton('btn2', 'processing', 'Processing Routing...');
        this.updateStatus('step2', 'PROCESSING...');
        
        await this.delay(2000);
        
        this.updateButton('btn2', 'complete', 'Routing Complete');
        this.updateStatus('step2', 'COMPLETE');
        this.enableButton('btn3');
        
        this.showModal('Intelligent Routing Complete', `
            <h4>👤 Optimal Adjuster Assignment</h4>
            <div style="margin: 12px 0;">
                <strong>Assigned: Jennifer Torres</strong><br>
                Match Score: 9.6/10 (Optimal)<br>
                Senior BI Specialist + Minor Certified (15 years)
            </div>
            <div style="background: #d4edda; padding: 12px; border-radius: 4px; margin: 12px 0;">
                <strong>✅ Qualifications:</strong> Minor certification, facial trauma expertise, family dynamics experience, medical complexity handling
            </div>
            <div style="background: #f8f9fa; padding: 12px; border-radius: 4px; margin: 12px 0;">
                <strong>Case Brief:</strong> "URGENT: Martinez family T-bone collision. Priority handling required for minor facial trauma and elderly cardiac monitoring."
            </div>
        `);
        
        this.isProcessing = false;
    }

    async processStep3() {
        if (this.isProcessing) return;
        this.isProcessing = true;
        
        this.updateButton('btn3', 'processing', 'Analyzing Patterns...');
        this.updateStatus('step3', 'PROCESSING...');
        
        await this.delay(3500);
        
        this.updateButton('btn3', 'complete', 'Analysis Complete');
        this.updateStatus('step3', 'COMPLETE');
        this.enableButton('btn4');
        
        this.updateComplexity('8.7');
        this.showModal('Historical Pattern Analysis Complete', `
            <h4>🔍 Similar Cases Found: 3 High-Confidence Matches</h4>
            <table style="width: 100%; border-collapse: collapse; margin: 12px 0;">
                <tr style="background: #f8f9fa;">
                    <th style="padding: 8px; border: 1px solid #dee2e6;">Case</th>
                    <th style="padding: 8px; border: 1px solid #dee2e6;">Similarity</th>
                    <th style="padding: 8px; border: 1px solid #dee2e6;">Final Payout</th>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #dee2e6;">2023 Minor-facial-elderly-family</td>
                    <td style="padding: 8px; border: 1px solid #dee2e6;">94%</td>
                    <td style="padding: 8px; border: 1px solid #dee2e6;"><strong>$890,000</strong></td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #dee2e6;">2024 Unconscious-elderly-diabetic</td>
                    <td style="padding: 8px; border: 1px solid #dee2e6;">89%</td>
                    <td style="padding: 8px; border: 1px solid #dee2e6;"><strong>$340,000</strong></td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #dee2e6;">2022 Facial-scarring-minor</td>
                    <td style="padding: 8px; border: 1px solid #dee2e6;">86%</td>
                    <td style="padding: 8px; border: 1px solid #dee2e6;"><strong>$485,000</strong></td>
                </tr>
            </table>
            <div style="background: #fff3cd; padding: 12px; border-radius: 4px; margin: 12px 0;">
                <strong>📈 Predictions:</strong> 91% probability of reserve increases, 76% legal representation within 90 days, 88% plastic surgery required
            </div>
        `);
        
        this.isProcessing = false;
    }

    async processStep4() {
        if (this.isProcessing) return;
        this.isProcessing = true;
        
        this.updateButton('btn4', 'processing', 'Calculating Reserves...');
        this.updateStatus('step4', 'PROCESSING...');
        
        await this.delay(2500);
        
        this.updateButton('btn4', 'complete', 'Analysis Complete');
        this.updateStatus('step4', 'COMPLETE');
        
        // Apply all AI enhancements
        this.applyAIResults();
        
        this.showModal('🎯 AI Analysis Complete - Claim Enhanced', `
            <h4>💰 Reserve Comparison</h4>
            <table style="width: 100%; border-collapse: collapse; margin: 12px 0;">
                <tr style="background: #f8f9fa;">
                    <th style="padding: 8px; border: 1px solid #dee2e6;">Method</th>
                    <th style="padding: 8px; border: 1px solid #dee2e6;">Reserve Amount</th>
                    <th style="padding: 8px; border: 1px solid #dee2e6;">Accuracy</th>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #dee2e6;">Traditional</td>
                    <td style="padding: 8px; border: 1px solid #dee2e6; color: #e74c3c;"><strong>$115,000</strong></td>
<td style="padding: 8px; border: 1px solid #dee2e6;">❌ 432% Shortfall</td>
               </tr>
               <tr style="background: #d4edda;">
                   <td style="padding: 8px; border: 1px solid #dee2e6;"><strong>AI-Enhanced</strong></td>
                   <td style="padding: 8px; border: 1px solid #dee2e6; color: #27ae60;"><strong>$612,500</strong></td>
                   <td style="padding: 8px; border: 1px solid #dee2e6;">✅ 84% Confidence</td>
               </tr>
           </table>
           <div style="background: #d4edda; padding: 12px; border-radius: 4px; margin: 12px 0;">
               <strong>🎉 Success:</strong> AI prevented a $497,500 reserve shortfall while ensuring optimal care for the Martinez family. 
               Claim complexity updated from 2.5 to 9.1 (Critical) with appropriate specialist routing.
           </div>
           <div style="background: #f8f9fa; padding: 12px; border-radius: 4px; margin: 12px 0;">
               <strong>✅ Applied Enhancements:</strong><br>
               • Complexity score: 2.5 → 9.1 (Critical)<br>
               • Reserve amount: $0 → $612,500<br>
               • Risk indicators: Activated<br>
               • Litigation risk: Escalated to CRITICAL<br>
               • Description: Enhanced with AI insights
           </div>
       `);
       
       this.isProcessing = false;
   }

   applyAIResults() {
       // Update main claim values
       document.getElementById('complexityScore').textContent = this.aiValues.complexity;
       document.getElementById('grossIncurred').textContent = this.aiValues.grossIncurred;
       document.getElementById('reservedAmount').textContent = this.aiValues.reserved;
       document.getElementById('claimDescription').textContent = this.aiValues.description;
       
       // Update complexity score visual
       this.updateComplexity('9.1');
       
       // Update risk indicators
       const riskIndicators = document.getElementById('riskIndicators');
       riskIndicators.innerHTML = `
           <div class="risk-item active">⚠️ Minor Involvement - Critical</div>
           <div class="risk-item active">🔍 Elderly Unconscious - Cardiac Risk</div>
           <div class="risk-item active">📋 Family Dynamics - Legal Rep Likely</div>
       `;
       
       // Update litigation risk in table
       const litigationRisk = document.getElementById('litigationRisk');
       litigationRisk.textContent = 'CRITICAL';
       litigationRisk.className = 'risk critical';
   }

   updateComplexity(score) {
       const scoreElement = document.getElementById('complexityScore');
       scoreElement.textContent = score;
       
       const percentage = (parseFloat(score) / 10) * 100;
       let color = '#27ae60'; // green
       
       if (percentage > 70) color = '#e74c3c'; // red
       else if (percentage > 40) color = '#f39c12'; // orange
       
       scoreElement.style.background = `conic-gradient(${color} ${percentage}%, #ecf0f1 ${percentage}%)`;
       scoreElement.style.color = color;
   }

   updateButton(buttonId, state, text) {
       const button = document.getElementById(buttonId);
       button.textContent = text;
       button.className = `step-btn ${state}`;
       
       if (state === 'processing') {
           button.classList.add('processing');
       }
   }

   updateStatus(stepId, status) {
       const statusElement = document.getElementById(stepId).querySelector('.step-status');
       statusElement.textContent = status;
       
       if (status.includes('PROCESSING')) {
           statusElement.style.background = '#f39c12';
       } else if (status === 'COMPLETE') {
           statusElement.style.background = '#27ae60';
       }
   }

   enableButton(buttonId) {
       const button = document.getElementById(buttonId);
       button.classList.remove('disabled');
       button.disabled = false;
       
       const stepId = buttonId.replace('btn', 'step');
       const statusElement = document.getElementById(stepId).querySelector('.step-status');
       statusElement.textContent = 'READY';
       statusElement.style.background = '#3498db';
   }

   showModal(title, content) {
       document.getElementById('modalTitle').textContent = title;
       document.getElementById('modalBody').innerHTML = content;
       document.getElementById('aiModal').style.display = 'flex';
       
       // Auto-close after 6 seconds
       setTimeout(() => {
           this.closeModal();
       }, 6000);
   }

   closeModal() {
       document.getElementById('aiModal').style.display = 'none';
   }

   delay(ms) {
       return new Promise(resolve => setTimeout(resolve, ms));
   }
}

// Initialize demo
document.addEventListener('DOMContentLoaded', () => {
   new ClaimCenterDemo();
});
